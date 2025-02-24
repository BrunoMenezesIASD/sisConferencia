package br.gov.mds.sisConferencia.service.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EixoDTO {

    private Long eventoId;
    
	private Long eixoId;
	
    private Integer numero;

    private String tema;

    private String descricao;

   
    private String ementa;
}
