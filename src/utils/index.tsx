import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';


// Função de tradução de Status
export const translateStatus = ( status: string ) => {
  const translate:any = {
    paid: 'Pago',
    refused: 'Recusado'
  };
  return translate[status] || status;
} 

export const formatMoney = (v:any) => {
	let sinal = +v < 0 ? '-' : '';
	v = v + '';
	if (!v || v == 'undefined') {
		return '0,00';
	}

	v = v.replace(/\D/g, ''); // Permite apenas dígitos
	v = v.length < 3 ? v.padStart(3, '0') : v;
	v = v.replace(/(\d{1})(\d{11})$/, '$1.$2'); //COLOCA . ANTES DOS ULTIMOS 11 DIGITOS
	v = v.replace(/(\d{1})(\d{8})$/, '$1.$2'); //COLOCA . ANTES DOS ULTIMOS 8 DIGITOS
	v = v.replace(/(\d{1})(\d{5})$/, '$1.$2'); //COLOCA . ANTES DOS ULTIMOS 5 DIGITOS
	v = v.replace(/(\d{1})(\d{1,2})$/, '$1,$2'); //COLOCA , ANTES DOS ULTIMOS 2 DIGITOS
	return sinal + v;
}

export const formatDate = ( date: string ) => {
  try {
		let resp = format(parseISO(date), 'dd/MM/yyyy HH:mm', {
			locale: ptBR,
		});
		return resp;
	} catch (err) {
		return '';
	}
};
