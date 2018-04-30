package com.smorales.grc.core.service;

import javax.transaction.Transactional;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.smorales.grc.core.domain.authentication.Rol;
import com.smorales.grc.core.domain.authentication.Usuario;
import com.smorales.grc.core.dto.UsuarioDTO;
import com.smorales.grc.core.dto.mapper.UsuarioMapper;
import com.smorales.grc.core.repository.RolRepository;
import com.smorales.grc.core.repository.UsuarioRepository;

@Service
@Transactional
public class UsuarioService {

	private UsuarioRepository repository;

	private RolRepository rolRepository;

	private PasswordEncoder encoder;

	private UsuarioMapper mapper;

	public UsuarioService(UsuarioRepository repository, RolRepository rolRepository, 
			PasswordEncoder encoder, UsuarioMapper mapper) {
		this.repository = repository;
		this.rolRepository = rolRepository;
		this.encoder = encoder;
		this.mapper = mapper;
	}

	public UsuarioDTO consultar(Long id) {
		return mapper.convertirADTO(repository.getOne(id));
	}
	
	public UsuarioDTO consultarPorEmail(String email) {
		return mapper.convertirADTO(repository.findByEmail(email));
	}

	public UsuarioDTO crear(UsuarioDTO usuarioDTO) throws ValidacionException {
		return mapper.convertirADTO(persist(usuarioDTO));
	}
	
	public Usuario persist(UsuarioDTO usuarioDTO) throws ValidacionException {
		if (repository.findByEmail(usuarioDTO.getEmail()) != null) {
			throw new ValidacionException("El email ya se encuentra registrado");
		}
		Rol rol = rolRepository.findByAuthority(usuarioDTO.getRol());
		Usuario usuario = mapper.convertirAEntidad(usuarioDTO);
		usuario.setContrasenia(encoder.encode(usuarioDTO.getContrasenia()));
		usuario.setRol(rol);
		return repository.save(usuario);
	}
}
