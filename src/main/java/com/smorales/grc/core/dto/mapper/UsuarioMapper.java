package com.smorales.grc.core.dto.mapper;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.springframework.stereotype.Component;

import com.smorales.grc.core.domain.authentication.Usuario;
import com.smorales.grc.core.dto.UsuarioDTO;

@Component
public class UsuarioMapper implements Mapper<Usuario, UsuarioDTO> {

	@Override
	public UsuarioDTO convertirADTO(Usuario usuario) {
		Objects.requireNonNull(usuario);
		UsuarioDTO dto = new UsuarioDTO();
		dto.setId(usuario.getId());
		dto.setNombres(usuario.getNombres());
		dto.setApellidos(usuario.getApellidos());
		dto.setEmail(usuario.getEmail());
		if (usuario.getRol() != null) {
			dto.setRol(usuario.getRol().getAuthority());
		}
		return dto;
	}

	@Override
	public List<UsuarioDTO> convertirADTO(List<Usuario> usuarios) {
		Objects.requireNonNull(usuarios);
		return usuarios.stream().map(this::convertirADTO).collect(Collectors.toList());
	}

	@Override
	public Usuario convertirAEntidad(UsuarioDTO dto) {
		Objects.requireNonNull(dto);
		Usuario usuario = new Usuario();
		usuario.setId(dto.getId());
		usuario.setNombres(dto.getNombres());
		usuario.setApellidos(dto.getApellidos());
		usuario.setEmail(dto.getEmail());
		return usuario;
	}

	@Override
	public List<Usuario> convertirAEntidad(List<UsuarioDTO> dtos) {
		Objects.requireNonNull(dtos);
		return dtos.stream().map(this::convertirAEntidad).collect(Collectors.toList());
	}

}
