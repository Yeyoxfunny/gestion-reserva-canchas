package com.smorales.grc.core.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.smorales.grc.core.controller.errors.BadRequestException;
import com.smorales.grc.core.controller.responses.AutenticacionResponse;
import com.smorales.grc.core.dto.UsuarioDTO;
import com.smorales.grc.core.security.JWTToken;
import com.smorales.grc.core.security.LoginDTO;
import com.smorales.grc.core.security.SecurityConstants;
import com.smorales.grc.core.security.TokenProvider;
import com.smorales.grc.core.service.UsuarioService;

@RestController
public class AutenticacionController {

	private AuthenticationManager authenticationManager;

	private TokenProvider tokenProvider;

	private UsuarioService usuarioService;

	public AutenticacionController(AuthenticationManager authenticationManager, TokenProvider tokenProvider,
			UsuarioService usuarioService) {
		this.authenticationManager = authenticationManager;
		this.tokenProvider = tokenProvider;
		this.usuarioService = usuarioService;
	}

	@PostMapping("/autenticar")
	public ResponseEntity<AutenticacionResponse> autenticar(@RequestBody LoginDTO login) {
		try {
			UsernamePasswordAuthenticationToken authenticationToken = 
					new UsernamePasswordAuthenticationToken(login.getEmail(), login.getContrasenia());
			Authentication authentication = authenticationManager.authenticate(authenticationToken);
			SecurityContextHolder.getContext().setAuthentication(authentication);
			JWTToken token = new JWTToken(tokenProvider.crearToken(authentication), SecurityConstants.TYPE_AUTHORIZATION);
			UsuarioDTO usuario = usuarioService.consultarPorEmail(login.getEmail());
			return new ResponseEntity<>(new AutenticacionResponse(token, usuario), HttpStatus.OK);
		} catch (BadCredentialsException e) {
			throw new BadRequestException("¡Error al iniciar sesión!, por favor verifique sus credenciales.");
		}
	}

}
