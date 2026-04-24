export default {
  nav: {
    overview: 'Panoramica',
    inventory: 'Inventario',
    orders: 'Ordini',
    finance: 'Finanza',
    demandForecast: 'Previsione domanda',
    reports: 'Report',
    restocking: 'Rifornimento',
    backlog: 'Arretrati',
    companyName: 'Catalyst Components',
    subtitle: 'Sistema di gestione inventario'
  },

  dashboard: {
    title: 'Panoramica',
    kpi: {
      title: 'Indicatori chiave di performance',
      inventoryTurnover: 'Rotazione inventario',
      ordersFulfilled: 'Ordini evasi',
      orderFillRate: 'Tasso di evasione ordini',
      revenue: 'Ricavi (ordini)',
      revenueYTD: 'Ricavi YTD',
      revenueMTD: 'Ricavi MTD',
      avgProcessingTime: 'Tempo medio di elaborazione (giorni)',
      goal: 'Obiettivo'
    },
    summary: {
      title: 'Riepilogo'
    },
    actions: {
      createPO: 'Crea ordine',
      viewPO: 'Visualizza ordine'
    },
    orderHealth: {
      title: 'Stato ordini',
      totalOrders: 'Totale ordini',
      revenue: 'Ricavi',
      avgOrderValue: 'Valore medio ordine',
      onTimeRate: 'Puntualità',
      avgFulfillmentDays: 'Giorni medi di evasione',
      total: 'Totale'
    },
    ordersByMonth: {
      title: 'Ordini per mese'
    },
    inventoryValue: {
      title: 'Valore inventario per categoria'
    },
    inventoryShortages: {
      title: 'Carenze di inventario',
      noShortages: 'Nessuna carenza — tutti gli ordini possono essere evasi!',
      noData: 'Nessun dato di inventario per i filtri selezionati',
      orderId: 'ID ordine',
      sku: 'SKU',
      itemName: 'Nome articolo',
      quantityNeeded: 'Quantità richiesta',
      quantityAvailable: 'Quantità disponibile',
      shortage: 'Carenza',
      daysDelayed: 'Giorni di ritardo',
      priority: 'Priorità',
      unitsShort: 'unità mancanti',
      days: 'giorni'
    },
    topProducts: {
      title: 'Prodotti migliori per ricavi',
      sku: 'SKU',
      product: 'Prodotto',
      category: 'Categoria',
      warehouse: 'Magazzino',
      stockStatus: 'Stato scorte',
      revenue: 'Ricavi',
      unitsOrdered: 'Unità ordinate',
      firstOrder: 'Primo ordine',
      inStock: 'Disponibile',
      lowStock: 'Scorte basse'
    }
  },

  inventory: {
    title: 'Inventario',
    description: 'Monitora e gestisci tutti gli articoli in inventario',
    stockLevels: 'Livelli di scorte',
    skus: 'SKU',
    searchPlaceholder: 'Cerca per nome articolo...',
    clearSearch: 'Cancella ricerca',
    totalItems: 'Totale articoli',
    totalValue: 'Valore totale',
    lowStockItems: 'Articoli a basse scorte',
    warehouses: 'Magazzini',
    table: {
      sku: 'SKU',
      itemName: 'Nome articolo',
      name: 'Nome',
      category: 'Categoria',
      warehouse: 'Magazzino',
      quantity: 'Quantità',
      quantityOnHand: 'Quantità disponibile',
      reorderPoint: 'Punto di riordino',
      unitCost: 'Costo unitario',
      unitPrice: 'Prezzo unitario',
      totalValue: 'Valore totale',
      location: 'Posizione',
      status: 'Stato'
    }
  },

  orders: {
    title: 'Ordini',
    description: 'Visualizza e gestisci gli ordini clienti',
    allOrders: 'Tutti gli ordini',
    totalOrders: 'Totale ordini',
    totalRevenue: 'Ricavi totali',
    avgOrderValue: 'Valore medio ordine',
    onTimeDelivery: 'Consegne puntuali',
    itemsCount: '{count} articoli',
    quantity: 'Qtà',
    table: {
      orderNumber: 'Numero ordine',
      orderId: 'ID ordine',
      orderDate: 'Data ordine',
      date: 'Data',
      customer: 'Cliente',
      category: 'Categoria',
      warehouse: 'Magazzino',
      items: 'Articoli',
      value: 'Valore',
      totalValue: 'Valore totale',
      status: 'Stato',
      expectedDelivery: 'Consegna prevista',
      actualDelivery: 'Consegna effettiva'
    }
  },

  finance: {
    title: 'Dashboard finanziario',
    description: 'Monitora ricavi, costi e performance finanziaria',
    totalRevenue: 'Ricavi totali',
    totalCosts: 'Costi totali',
    netProfit: 'Utile netto',
    avgOrderValue: 'Valore medio ordine',
    fromOrders: 'Da {count} ordini',
    costBreakdown: 'Acquisti + Operativi + Lavoro + Overhead',
    margin: 'margine',
    perOrderRevenue: 'Ricavi per ordine',
    revenueVsCosts: {
      title: 'Ricavi vs costi mensili',
      revenue: 'Ricavi',
      costs: 'Costi totali'
    },
    monthlyCostFlow: {
      title: 'Flusso costi mensile',
      procurement: 'Acquisti',
      operational: 'Operativi',
      labor: 'Lavoro',
      overhead: 'Overhead'
    },
    categorySpending: {
      title: 'Spesa per categoria',
      ofTotal: 'del totale'
    },
    transactions: {
      title: 'Transazioni recenti',
      id: 'ID',
      description: 'Descrizione',
      vendor: 'Fornitore',
      date: 'Data',
      amount: 'Importo'
    }
  },

  demand: {
    title: 'Previsione domanda',
    description: 'Analizza tendenze e previsioni della domanda',
    increasingDemand: 'Domanda crescente',
    stableDemand: 'Domanda stabile',
    decreasingDemand: 'Domanda decrescente',
    itemsCount: '{count} articoli',
    more: 'altri...',
    demandForecasts: 'Previsioni domanda',
    table: {
      sku: 'SKU',
      itemName: 'Nome articolo',
      currentDemand: 'Domanda attuale',
      forecastedDemand: 'Domanda prevista',
      change: 'Variazione',
      trend: 'Tendenza',
      period: 'Periodo'
    }
  },

  reports: {
    title: 'Report di performance',
    description: 'Visualizza i KPI trimestrali e le tendenze mensili',
    loading: 'Caricamento report...',
    error: 'Errore nel caricamento dei report',
    quarterly: {
      title: 'Performance trimestrale',
      quarter: 'Trimestre',
      totalOrders: 'Totale ordini',
      totalRevenue: 'Ricavi totali',
      avgOrderValue: 'Valore medio ordine',
      fulfillmentRate: 'Tasso di evasione'
    },
    monthlyTrend: {
      title: 'Tendenza ricavi mensili'
    },
    monthOverMonth: {
      title: 'Analisi mese su mese',
      month: 'Mese',
      orders: 'Ordini',
      revenue: 'Ricavi',
      change: 'Variazione',
      growthRate: 'Tasso di crescita'
    },
    stats: {
      totalRevenue: 'Ricavi totali (YTD)',
      avgMonthlyRevenue: 'Ricavi medi mensili',
      totalOrders: 'Totale ordini (YTD)',
      bestQuarter: 'Trimestre migliore'
    }
  },

  backlog: {
    title: 'Gestione arretrati',
    description: 'Monitora e risolvi le carenze di inventario',
    loading: 'Caricamento arretrati...',
    highPriority: 'Alta priorità',
    mediumPriority: 'Media priorità',
    lowPriority: 'Bassa priorità',
    totalItems: 'Totale arretrati',
    cardTitle: 'Articoli in arretrato',
    noItems: 'Nessun arretrato — tutti gli ordini possono essere evasi!',
    unitsShort: '{n} unità mancanti',
    days: '{n} giorni',
    table: {
      orderId: 'ID ordine',
      sku: 'SKU',
      itemName: 'Nome articolo',
      quantityNeeded: 'Quantità richiesta',
      quantityAvailable: 'Quantità disponibile',
      shortage: 'Carenza',
      daysDelayed: 'Giorni di ritardo',
      priority: 'Priorità'
    }
  },

  restocking: {
    title: 'Raccomandazioni di rifornimento',
    description: 'Genera raccomandazioni di acquisto in base alle scorte, alle previsioni e al budget',
    budgetLabel: 'Limite di budget',
    budgetPlaceholder: 'Inserisci budget...',
    generate: 'Genera raccomandazioni',
    budgetSummary: {
      total: 'Budget totale',
      used: 'Budget utilizzato',
      remaining: 'Rimanente'
    },
    table: {
      sku: 'SKU',
      name: 'Nome articolo',
      warehouse: 'Magazzino',
      category: 'Categoria',
      currentStock: 'Scorte attuali',
      weeksOfStock: 'Settimane di scorte',
      suggestedQty: 'Quantità suggerita',
      unitCost: 'Costo unitario',
      estimatedCost: 'Costo stimato',
      urgency: 'Urgenza'
    },
    urgency: {
      critical: 'Critico',
      warning: 'Attenzione'
    },
    empty: 'Nessun rifornimento necessario — tutte le scorte sono sufficienti.',
    noMatch: 'Nessun articolo rientra nel budget. Prova ad aumentare il limite.',
    loading: 'Generazione raccomandazioni...',
    error: 'Errore nel caricamento delle raccomandazioni'
  },

  filters: {
    timePeriod: 'Periodo',
    location: 'Sede',
    category: 'Categoria',
    orderStatus: 'Stato ordine',
    all: 'Tutti',
    allMonths: 'Tutti i mesi'
  },

  status: {
    delivered: 'Consegnato',
    shipped: 'Spedito',
    processing: 'In elaborazione',
    backordered: 'In arretrato',
    inStock: 'Disponibile',
    lowStock: 'Scorte basse',
    adequate: 'Adeguato'
  },

  trends: {
    increasing: 'crescente',
    stable: 'stabile',
    decreasing: 'decrescente'
  },

  priority: {
    high: 'Alta',
    medium: 'Media',
    low: 'Bassa'
  },

  categories: {
    circuitBoards: 'Schede di circuito',
    sensors: 'Sensori',
    actuators: 'Attuatori',
    controllers: 'Controllori',
    powerSupplies: 'Alimentatori'
  },

  spendingCategories: {
    rawMaterials: 'Materie prime',
    components: 'Componenti',
    equipment: 'Attrezzatura',
    consumables: 'Materiali di consumo'
  },

  warehouses: {
    sanFrancisco: 'San Francisco',
    london: 'Londra',
    tokyo: 'Tokyo'
  },

  months: {
    jan: 'Gen',
    feb: 'Feb',
    mar: 'Mar',
    apr: 'Apr',
    may: 'Mag',
    jun: 'Giu',
    jul: 'Lug',
    aug: 'Ago',
    sep: 'Set',
    oct: 'Ott',
    nov: 'Nov',
    dec: 'Dic',
    january: 'Gennaio',
    february: 'Febbraio',
    march: 'Marzo',
    april: 'Aprile',
    june: 'Giugno',
    july: 'Luglio',
    august: 'Agosto',
    september: 'Settembre',
    october: 'Ottobre',
    november: 'Novembre',
    december: 'Dicembre'
  },

  profile: {
    profileDetails: 'Dettagli profilo',
    myTasks: 'I miei compiti',
    logout: 'Disconnetti'
  },

  profileDetails: {
    title: 'Dettagli profilo',
    email: 'Email',
    department: 'Reparto',
    location: 'Sede',
    phone: 'Telefono',
    joinDate: 'Data di ingresso',
    employeeId: 'ID dipendente',
    close: 'Chiudi'
  },

  tasks: {
    title: 'I miei compiti',
    taskTitle: 'Titolo compito',
    taskTitlePlaceholder: 'Inserisci titolo compito...',
    priority: 'Priorità',
    dueDate: 'Scadenza',
    addTask: 'Aggiungi compito',
    noTasks: 'Nessun compito. Aggiungi il primo compito sopra!'
  },

  language: {
    english: 'Inglese',
    japanese: 'Giapponese',
    selectLanguage: 'Seleziona lingua'
  },

  common: {
    loading: 'Caricamento...',
    error: 'Errore',
    noData: 'Nessun dato disponibile',
    viewDetails: 'Visualizza dettagli',
    close: 'Chiudi',
    save: 'Salva',
    cancel: 'Annulla',
    search: 'Cerca',
    filter: 'Filtra',
    export: 'Esporta',
    items: 'articoli'
  }
}
