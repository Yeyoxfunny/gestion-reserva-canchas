package com.smorales.grc.core.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.smorales.grc.core.domain.Cliente;
import com.smorales.grc.core.domain.authentication.Usuario;
import com.smorales.grc.core.dto.ClienteDTO;
import com.smorales.grc.core.dto.mapper.ClienteMapper;
import com.smorales.grc.core.repository.ClienteRepository;

@Service
@Transactional
public class ClienteService {
	
	private UsuarioService usuarioService;
	
	private ClienteRepository repository;
	
	private ClienteMapper mapper;
	
	public ClienteService(UsuarioService usuarioService, ClienteRepository repository, 
			ClienteMapper mapper) {
		this.usuarioService = usuarioService;
		this.repository = repository;
		this.mapper = mapper;
	}
	
	public List<ClienteDTO> obtenerTodos() {
		return mapper.convertirADTO(repository.findAll());
	}
	
	public ClienteDTO consultar(Long id) {
		return mapper.convertirADTO(repository.getOne(id));
	}
	
	public ClienteDTO consultarPorUsuario(Long idUsuario) {
		return mapper.convertirADTO(repository.findByUserId(idUsuario));
	}

	public ClienteDTO crear(ClienteDTO clienteDTO) throws ValidacionException {
		Usuario usuario = usuarioService.persist(mapper.convertirAUsuario(clienteDTO));
		Cliente cliente = mapper.convertirAEntidad(clienteDTO);
		cliente.setUsuario(usuario);
		return mapper.convertirADTO(repository.save(cliente));
	}
	
}
