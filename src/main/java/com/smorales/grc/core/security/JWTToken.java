package com.smorales.grc.core.security;

import java.io.Serializable;

public class JWTToken implements Serializable {

	private static final long serialVersionUID = 1L;

	private String token;
	private String tokenType;

	public JWTToken(String token, String tokenType) {
		this.token = token;
		this.tokenType = tokenType;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String getTokenType() {
		return tokenType;
	}

	public void setTokenType(String tokenType) {
		this.tokenType = tokenType;
	}

}
