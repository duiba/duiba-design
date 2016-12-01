/* eslint-disable */
let text = {
  daysOfWeek: {
    en: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    cn: ['日', '一', '二', '三', '四', '五', '六'],
    es: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa']
  },
  limit: {
    en: 'Limit reached ({{limit}} items max).',
    es: 'Limite alcanzado (máximo {{limit}} items).'
  },
  loading: {
    en: 'Loading...',
    cn: '加载...',
    es: 'Cargando...'
  },
  minLength: {
    en: 'Min. Length',
    es: 'Tamaño Mínimo'
  },
  months: {
    en: [
      'January', 'February', 'March',
      'April', 'May', 'June',
      'July', 'August', 'September',
      'October', 'November', 'December'
    ],
    cn: [
      '一月', '二月', '三月',
      '四月', '五月', '六月',
      '七月', '八月', '九月',
      '十月', '十一月', '十二月'
    ],
    es: [
      'Enero', 'Febrero', 'Marzo',
      'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre',
      'Octubre', 'Noviembre', 'Diciembre'
    ]
  },
  notSelected: {
    en: 'Nothing Selected',
    es: 'Nada seleccionado'
  },
  required: {
    en: 'Required',
    es: 'Requerido'
  },
  search: {
    en: 'Search',
    es: 'Buscar'
  }
}
export default (lang = 'en') => {
  let tr = {}
  for (let i in text) {
    tr[i] = text[i][lang] || text[i]['en']
  }
  return tr
}
