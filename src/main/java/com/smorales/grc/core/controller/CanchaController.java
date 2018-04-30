package com.smorales.grc.core.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smorales.grc.core.dto.CanchaDTO;
import com.smorales.grc.core.service.CanchaService;

@RestController
@RequestMapping("/api/canchas")
public class CanchaController {

	private CanchaService service;

	public CanchaController(CanchaService service) {
		this.service = service;
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<CanchaDTO> obtenerPorId(@PathVariable Long id) {
		return ResponseEntity.ok(service.consultar(id));
	}
	
	@GetMapping
	public ResponseEntity<List<CanchaDTO>> obtenerTodas() {
		return ResponseEntity.ok(service.obtenerTodos());
	}

	@PostMapping
	public ResponseEntity<CanchaDTO> insertar(@RequestBody CanchaDTO cancha) {
		return ResponseEntity.ok(service.insertar(cancha));
	}
	
	@DeleteMapping("/{id}")
	public void insertar(@PathVariable Long id) {
		service.eliminar(id);
	}
}
