package com.smorales.grc.core.security;

import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;

@Component
public class TokenProvider {
	
	private static final Log log = LogFactory.getLog(TokenProvider.class);

	private static final String ROL_KEY = "rol";

	public String crearToken(Authentication authentication) {
		Objects.requireNonNull(authentication);
		return Jwts.builder()
				.setSubject(authentication.getName())
				.claim(ROL_KEY, getRol(authentication))
				.signWith(SignatureAlgorithm.HS512, SecurityConstants.SECRET_KEY)
				.compact();
	}
	
	private String getRol(Authentication authentication) {
		return authentication.getAuthorities().stream().findFirst().get().getAuthority();
	}
	
	public Optional<Authentication> obtenerAutenticacion(String token) {
		Objects.requireNonNull(token);
		if (!esTokenValido(token)) {
			return Optional.empty();
		}
		Claims claims = Jwts.parser()
				.setSigningKey(SecurityConstants.SECRET_KEY)
				.parseClaimsJws(token)
				.getBody();
		String authority = claims.get(ROL_KEY).toString();
		List<SimpleGrantedAuthority> authorities = 
				Collections.singletonList(new SimpleGrantedAuthority(authority));
		User user = new User(claims.getSubject(), "", authorities);
		return Optional.of(new UsernamePasswordAuthenticationToken(user, token, authorities));		
	}
	
    public boolean esTokenValido(String authToken) {
        try {
            Jwts.parser().setSigningKey(SecurityConstants.SECRET_KEY).parseClaimsJws(authToken);
            return true;
        } catch (SignatureException | MalformedJwtException | 
        		ExpiredJwtException | UnsupportedJwtException | IllegalArgumentException e) {
        	log.info(e.getMessage());
        	return false;
        }
    }
}
