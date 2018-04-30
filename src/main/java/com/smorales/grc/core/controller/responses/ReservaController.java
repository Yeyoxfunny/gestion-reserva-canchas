package com.smorales.grc.core.controller.responses;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smorales.grc.core.dto.ReservaDTO;
import com.smorales.grc.core.service.ReservaService;

@RestController
@RequestMapping("/api/reservas")
public class ReservaController {

	private ReservaService service;

	public ReservaController(ReservaService service) {
		this.service = service;
	}
	
	@GetMapping("/cliente/{id}")
	public ResponseEntity<List<ReservaDTO>> obtenerPorCliente(@PathVariable(name = "id") Long idCliente) {
		return ResponseEntity.ok(service.obtenerPorCliente(idCliente));
	}

	@PostMapping
	public ResponseEntity<ReservaDTO> crear(@RequestBody ReservaDTO reserva) {
		return ResponseEntity.ok(service.insertar(reserva));
	}
}
