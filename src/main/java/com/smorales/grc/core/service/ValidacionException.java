package com.smorales.grc.core.service;

public class ValidacionException extends Exception {

	private static final long serialVersionUID = 1L;

	public ValidacionException() {

	}

	public ValidacionException(String message, Throwable cause) {
		super(message, cause);
	}

	public ValidacionException(String message) {
		super(message);
	}

	public ValidacionException(Throwable cause) {
		super(cause);
	}

}
