package com.smorales.grc.core.security;

import java.io.IOException;
import java.util.Optional;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.GenericFilterBean;

public class AuthorizationApiFilter extends GenericFilterBean {
	
	private TokenProvider tokenProvider;

	public AuthorizationApiFilter(TokenProvider tokenProvider) {
		this.tokenProvider = tokenProvider;
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		String token = ((HttpServletRequest) request).getHeader(SecurityConstants.AUTHORIZATION_KEY);
		Authentication authentication = null;
		if (token != null) {
			authentication = getTokenFromRequestHeader(token);
		}
		SecurityContextHolder.getContext().setAuthentication(authentication);
		chain.doFilter(request, response);
	}

	private Authentication getTokenFromRequestHeader(String token) {
		if (!token.contains(SecurityConstants.TYPE_AUTHORIZATION)) {
			return null;
		}
		Optional<Authentication> authentication = 
				tokenProvider.obtenerAutenticacion(SecurityConstants.extractToken(token));
		return authentication.isPresent() ? authentication.get() : null;
	}

}
