package com.smorales.grc.core.dto.mapper;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.springframework.stereotype.Component;

import com.smorales.grc.core.domain.Cliente;
import com.smorales.grc.core.domain.authentication.Authority;
import com.smorales.grc.core.domain.authentication.Usuario;
import com.smorales.grc.core.dto.ClienteDTO;
import com.smorales.grc.core.dto.UsuarioDTO;

@Component
public class ClienteMapper implements Mapper<Cliente, ClienteDTO> {

	@Override
	public ClienteDTO convertirADTO(Cliente cliente) {
		Objects.requireNonNull(cliente);
		ClienteDTO clienteDTO = new ClienteDTO();
		clienteDTO.setId(cliente.getId());
		clienteDTO.setNumeroDocumento(cliente.getNumeroDocumento());
		clienteDTO.setCelular(cliente.getCelular());
		Usuario usuario = cliente.getUsuario();
		if (usuario != null) {
			clienteDTO.setNombres(usuario.getNombres());
			clienteDTO.setApellidos(usuario.getApellidos());
			clienteDTO.setEmail(usuario.getEmail());
		}
		return clienteDTO;
	}
	
	public UsuarioDTO convertirAUsuario(ClienteDTO clienteDTO) {
		Objects.requireNonNull(clienteDTO);
		UsuarioDTO usuario = new UsuarioDTO();
		usuario.setId(clienteDTO.getId());
		usuario.setNombres(clienteDTO.getNombres());
		usuario.setApellidos(clienteDTO.getApellidos());
		usuario.setEmail(clienteDTO.getEmail());
		usuario.setContrasenia(clienteDTO.getContrasenia());
		usuario.setRol(Authority.CLIENTE);
		return usuario;
	}

	@Override
	public List<ClienteDTO> convertirADTO(List<Cliente> clientes) {
		Objects.requireNonNull(clientes);
		return clientes.stream().map(this::convertirADTO).collect(Collectors.toList());
	}

	@Override
	public Cliente convertirAEntidad(ClienteDTO clienteDTO) {
		Objects.requireNonNull(clienteDTO);
		Cliente cliente = new Cliente();
		cliente.setId(clienteDTO.getId());
		cliente.setNumeroDocumento(clienteDTO.getNumeroDocumento());
		cliente.setCelular(clienteDTO.getCelular());
		return cliente;
	}

	@Override
	public List<Cliente> convertirAEntidad(List<ClienteDTO> clientesDTO) {
		Objects.requireNonNull(clientesDTO);
		return clientesDTO.stream().map(this::convertirAEntidad).collect(Collectors.toList());
	}

}
