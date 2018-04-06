package com.smorales.grc.core.security;

import java.util.Collection;
import java.util.Collections;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.smorales.grc.core.domain.authentication.Rol;
import com.smorales.grc.core.domain.authentication.Usuario;
import com.smorales.grc.core.repository.UsuarioRepository;

@Component("jpaUserDetailsService")
public class JpaUserDetailsService implements UserDetailsService {

	private UsuarioRepository repository;

	public JpaUserDetailsService(UsuarioRepository repository) {
		this.repository = repository;
	}

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Usuario usuario = repository.findByEmail(email);
		if (usuario == null) {
			throw new UsernameNotFoundException("Usuario con email " + email + " no existe!");
		}
		return new User(usuario.getEmail(), usuario.getContrasenia(), buildAuthorities(usuario.getRol()));
	}

	private Collection<GrantedAuthority> buildAuthorities(Rol rol) {
		return Collections.singletonList(new SimpleGrantedAuthority(rol.getAuthority().getNombre()));
	}

}
