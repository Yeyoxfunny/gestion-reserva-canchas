package com.smorales.grc.core.controller;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.smorales.grc.core.security.JWTToken;
import com.smorales.grc.core.security.LoginDTO;
import com.smorales.grc.core.security.SecurityConstants;
import com.smorales.grc.core.security.TokenProvider;

@RestController
public class AutenticacionController {

	private AuthenticationManager authenticationManager;

	private TokenProvider tokenProvider;

	public AutenticacionController(AuthenticationManager authenticationManager, TokenProvider tokenProvider) {
		this.authenticationManager = authenticationManager;
		this.tokenProvider = tokenProvider;
	}

	@PostMapping("/autenticar")
	public ResponseEntity<JWTToken> autenticar(@RequestBody LoginDTO login) {
		UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
				login.getEmail(), login.getContrasenia());
		Authentication authentication = authenticationManager.authenticate(authenticationToken);
		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = tokenProvider.crearToken(authentication);
		HttpHeaders headers = new HttpHeaders();
		headers.set(SecurityConstants.AUTHORIZATION_KEY, SecurityConstants.headerValue(jwt));
		return new ResponseEntity<>(new JWTToken(jwt, SecurityConstants.TYPE_AUTHORIZATION), headers, HttpStatus.OK);
	}

}
