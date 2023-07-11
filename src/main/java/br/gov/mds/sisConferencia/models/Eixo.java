package br.gov.mds.sisConferencia.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import br.gov.mds.sisConferencia.util.Schemas;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "TB_EIXO", schema = Schemas.SISCONFERENCIA)
public class Eixo {
	
    @Id
    @Column(name = "PK_EIXO")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SQ_EIXO")
    @SequenceGenerator(name = "SQ_EIXO", sequenceName = "SQ_EIXO", allocationSize = 1)
	private Long id;
	
	@Column(name = "NU_EIXO")
	private Integer numero;
	
	@Column(name = "DS_TEMA")
	private String tema;

	@Column(name = "DS_DESCRICAO")
	private String descricao;

	@ManyToOne
	@JoinColumn(name = "FK_EVENTO")
	private Evento evento;
	
    @ManyToOne
    @JoinColumn(name = "FK_EMENTA", nullable = false)
    private Ementa ementa;


}
