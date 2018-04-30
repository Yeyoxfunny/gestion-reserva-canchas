package com.smorales.grc.core.dto.mapper;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.springframework.stereotype.Component;

import com.smorales.grc.core.domain.Reserva;
import com.smorales.grc.core.dto.ReservaDTO;

@Component
public class ReservaMapper implements Mapper<Reserva, ReservaDTO> {

	@Override
	public ReservaDTO convertirADTO(Reserva reserva) {
		Objects.requireNonNull(reserva);
		ReservaDTO dto = new ReservaDTO();
		dto.setId(reserva.getId());
		dto.setFecha(reserva.getFecha());
		dto.setCantidadHoras(reserva.getCantidadHoras());
		return dto;
	}

	@Override
	public List<ReservaDTO> convertirADTO(List<Reserva> reservas) {
		Objects.requireNonNull(reservas);
		return reservas.stream().map(this::convertirADTO).collect(Collectors.toList());
	}

	@Override
	public Reserva convertirAEntidad(ReservaDTO dto) {
		Objects.requireNonNull(dto);
		Reserva reserva = new Reserva();
		reserva.setId(dto.getId());
		reserva.setFecha(dto.getFecha());
		reserva.setCantidadHoras(dto.getCantidadHoras());
		return reserva;
	}

	@Override
	public List<Reserva> convertirAEntidad(List<ReservaDTO> reservas) {
		Objects.requireNonNull(reservas);
		return reservas.stream().map(this::convertirAEntidad).collect(Collectors.toList());
	}

}
