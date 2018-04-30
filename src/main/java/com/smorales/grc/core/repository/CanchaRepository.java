package com.smorales.grc.core.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.smorales.grc.core.domain.Cancha;

@Repository
public interface CanchaRepository extends JpaRepository<Cancha, Long> {

}
