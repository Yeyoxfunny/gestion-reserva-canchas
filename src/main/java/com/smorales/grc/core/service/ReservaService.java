package com.smorales.grc.core.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.smorales.grc.core.domain.Cancha;
import com.smorales.grc.core.domain.Cliente;
import com.smorales.grc.core.domain.Reserva;
import com.smorales.grc.core.dto.ReservaDTO;
import com.smorales.grc.core.dto.mapper.ReservaMapper;
import com.smorales.grc.core.repository.ReservaRepository;

@Service
@Transactional
public class ReservaService {

	private ReservaRepository repository;

	private ReservaMapper mapper;

	public ReservaService(ReservaRepository repository, ReservaMapper mapper) {
		this.repository = repository;
		this.mapper = mapper;
	}

	public ReservaDTO insertar(ReservaDTO reservaDTO) {
		Cliente cliente = new Cliente();
		cliente.setId(reservaDTO.getIdCliente());

		Cancha cancha = new Cancha();
		cancha.setId(reservaDTO.getIdCancha());

		Reserva reserva = mapper.convertirAEntidad(reservaDTO);
		reserva.setCliente(cliente);
		reserva.setCancha(cancha);
		return mapper.convertirADTO(repository.save(reserva));
	}
	
	public List<ReservaDTO> obtenerPorCliente(Long idCliente) {
		return mapper.convertirADTO(repository.findByIdCliente(idCliente));
	}
}
