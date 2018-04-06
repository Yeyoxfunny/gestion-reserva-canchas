package com.smorales.grc.core.service;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class ValidacionException extends Exception {

	private static final long serialVersionUID = 1L;

	public ValidacionException() {
		super();
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
