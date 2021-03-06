package com.smorales.grc.core.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.smorales.grc.core.domain.Reserva;

@Repository
public interface ReservaRepository extends JpaRepository<Reserva, Long> {

	@Query("SELECT r FROM Reserva r WHERE r.cliente.id = ?1")
	List<Reserva> findByIdCliente(Long idCliente);
	
}
