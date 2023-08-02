package br.gov.mds.sisConferencia.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.gov.mds.sisConferencia.models.Eixo;
import org.springframework.stereotype.Repository;

@Repository
public interface EixoRepository extends JpaRepository<Eixo, Long> {


}
