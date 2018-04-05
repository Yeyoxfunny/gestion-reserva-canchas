package com.smorales.grc.core.dto.mapper;

import java.util.List;

public interface Mapper<E, D> {

	D convertirADTO(E entity);

	List<D> convertirADTO(List<E> entities);

	E convertirAEntidad(D dto);

	List<E> convertirAEntidad(List<D> dtos);

}
