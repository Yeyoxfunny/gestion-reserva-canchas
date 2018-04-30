package com.smorales.grc.core.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.smorales.grc.core.domain.Cancha;
import com.smorales.grc.core.dto.CanchaDTO;
import com.smorales.grc.core.dto.mapper.CanchaMapper;
import com.smorales.grc.core.repository.CanchaRepository;

@Service
@Transactional
public class CanchaService {
	
	private CanchaRepository repository;
	
	private CanchaMapper mapper;
	
	public CanchaService(CanchaRepository repository, CanchaMapper mapper) {
		this.repository = repository;
		this.mapper = mapper;
	}
	
	public CanchaDTO consultar(Long id) {
		return mapper.convertirADTO(repository.getOne(id));
	}
	
	public List<CanchaDTO> obtenerTodos() {
		return mapper.convertirADTO(repository.findAll());
	}

	public CanchaDTO insertar(CanchaDTO canchaDTO) {
		Cancha cancha = mapper.convertirAEntidad(canchaDTO);
		return mapper.convertirADTO(repository.save(cancha));
	}
	
	public void eliminar(Long id) {
		repository.deleteById(id);
	}
	
}
