package com.smorales.grc.core.domain.authentication;

public enum Authority {

	ADMINISTRADOR_SISTEMA("ADMINISTRADOR_SISTEMA"), CLIENTE("CLIENTE");

	private final String nombreRol;

	private Authority(String nombreRol) {
		this.nombreRol = nombreRol;
	}

	public String getNombre() {
		return nombreRol;
	}

}
