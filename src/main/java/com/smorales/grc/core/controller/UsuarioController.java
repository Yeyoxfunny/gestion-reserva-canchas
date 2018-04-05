package com.smorales.grc.core.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smorales.grc.core.dto.UsuarioDTO;
import com.smorales.grc.core.service.UsuarioService;
import com.smorales.grc.core.service.ValidacionException;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

	private UsuarioService service;

	public UsuarioController(UsuarioService service) {
		this.service = service;
	}

	@GetMapping("/{id}")
	public ResponseEntity<UsuarioDTO> consultar(@PathVariable Long id) {
		return ResponseEntity.ok(service.consultar(id));
	}

	@PostMapping
	public ResponseEntity<UsuarioDTO> crear(@RequestBody UsuarioDTO usuario) throws ValidacionException {
		return new ResponseEntity<UsuarioDTO>(service.crear(usuario), HttpStatus.CREATED);
	}
}
