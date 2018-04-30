package com.smorales.grc.core.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.smorales.grc.core.dto.ClienteDTO;
import com.smorales.grc.core.service.ClienteService;
import com.smorales.grc.core.service.ValidacionException;

@RestController
public class ClienteController {
	
	@Autowired
	private ClienteService service;
	
	@GetMapping("/api/clientes/{id}")
	public ResponseEntity<ClienteDTO> consultar(@PathVariable Long id) {
		return ResponseEntity.ok(service.consultar(id));
	}
	
	@GetMapping("/api/clientes")
	public ResponseEntity<List<ClienteDTO>> getAll() {
		return ResponseEntity.ok(service.obtenerTodos());
	}
	
	@GetMapping("/api/clientes/usuario/{id}")
	public ResponseEntity<ClienteDTO> consultarPorUsuario(@PathVariable(name = "id") Long idUsuario) {
		return ResponseEntity.ok(service.consultarPorUsuario(idUsuario));
	}

	@PostMapping("/clientes")
	public ResponseEntity<ClienteDTO> crear(@RequestBody ClienteDTO cliente) throws ValidacionException {
		return new ResponseEntity<ClienteDTO>(service.crear(cliente), HttpStatus.CREATED);
	}
}
