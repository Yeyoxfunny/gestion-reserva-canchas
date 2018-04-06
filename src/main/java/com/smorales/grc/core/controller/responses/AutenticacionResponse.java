package com.smorales.grc.core.controller.responses;

import java.io.Serializable;

import com.smorales.grc.core.dto.UsuarioDTO;
import com.smorales.grc.core.security.JWTToken;

public class AutenticacionResponse implements Serializable {

	private static final long serialVersionUID = 1L;

	private JWTToken authToken;
	private UsuarioDTO usuario;

	public AutenticacionResponse(JWTToken authToken, UsuarioDTO usuario) {
		this.authToken = authToken;
		this.usuario = usuario;
	}

	public JWTToken getAuthToken() {
		return authToken;
	}


	public void setAuthToken(JWTToken authToken) {
		this.authToken = authToken;
	}


	public UsuarioDTO getUsuario() {
		return usuario;
	}

	public void setUsuario(UsuarioDTO usuario) {
		this.usuario = usuario;
	}
}
