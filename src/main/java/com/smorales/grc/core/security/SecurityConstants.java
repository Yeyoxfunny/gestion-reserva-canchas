package com.smorales.grc.core.security;

public final class SecurityConstants {

	public static final String AUTHORIZATION_KEY = "Authorization";
	public static final String TYPE_AUTHORIZATION = "Bearer";
	public static final String SECRET_KEY = "n0w~<T;Fx{D{B/D";

	public static String headerValue(String token) {
		return String.format("%s %s", TYPE_AUTHORIZATION, token);
	}
	
	public static String extractToken(String httpToken) {
		return httpToken.replace(TYPE_AUTHORIZATION + " ", "");
	}
}
