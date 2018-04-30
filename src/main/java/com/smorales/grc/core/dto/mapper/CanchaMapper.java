package com.smorales.grc.core.dto.mapper;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.springframework.stereotype.Component;

import com.smorales.grc.core.domain.Cancha;
import com.smorales.grc.core.dto.CanchaDTO;

@Component
public class CanchaMapper implements Mapper<Cancha, CanchaDTO> {

	@Override
	public CanchaDTO convertirADTO(Cancha cancha) {
		Objects.requireNonNull(cancha);
		CanchaDTO dto = new CanchaDTO();
		dto.setId(cancha.getId());
		dto.setNombre(cancha.getNombre());
		dto.setUrlImagen(cancha.getUrlImagen());
		dto.setPrecio(cancha.getPrecio());
		return dto;
	}

	@Override
	public List<CanchaDTO> convertirADTO(List<Cancha> entities) {
		Objects.requireNonNull(entities);
		return entities.stream().map(this::convertirADTO).collect(Collectors.toList());
	}

	@Override
	public Cancha convertirAEntidad(CanchaDTO dto) {
		Objects.requireNonNull(dto);
		Cancha cancha = new Cancha();
		cancha.setId(dto.getId());
		cancha.setNombre(dto.getNombre());
		cancha.setUrlImagen(dto.getUrlImagen());
		cancha.setPrecio(dto.getPrecio());
		return cancha;
	}

	@Override
	public List<Cancha> convertirAEntidad(List<CanchaDTO> dtos) {
		Objects.requireNonNull(dtos);
		return dtos.stream().map(this::convertirAEntidad).collect(Collectors.toList());
	}

}
