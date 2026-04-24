export default {
  nav: {
    overview: 'Przegląd',
    inventory: 'Magazyn',
    orders: 'Zamówienia',
    finance: 'Finanse',
    demandForecast: 'Prognoza popytu',
    reports: 'Raporty',
    restocking: 'Uzupełnianie zapasów',
    backlog: 'Zaległości',
    companyName: 'Catalyst Components',
    subtitle: 'System zarządzania magazynem'
  },

  dashboard: {
    title: 'Przegląd',
    kpi: {
      title: 'Kluczowe wskaźniki efektywności',
      inventoryTurnover: 'Rotacja zapasów',
      ordersFulfilled: 'Zrealizowane zamówienia',
      orderFillRate: 'Wskaźnik realizacji zamówień',
      revenue: 'Przychód (zamówienia)',
      revenueYTD: 'Przychód YTD',
      revenueMTD: 'Przychód MTD',
      avgProcessingTime: 'Śr. czas przetwarzania (dni)',
      goal: 'Cel'
    },
    summary: {
      title: 'Podsumowanie'
    },
    actions: {
      createPO: 'Utwórz zamówienie',
      viewPO: 'Pokaż zamówienie'
    },
    orderHealth: {
      title: 'Stan zamówień',
      totalOrders: 'Łączna liczba zamówień',
      revenue: 'Przychód',
      avgOrderValue: 'Śr. wartość zamówienia',
      onTimeRate: 'Terminowość',
      avgFulfillmentDays: 'Śr. czas realizacji (dni)',
      total: 'Razem'
    },
    ordersByMonth: {
      title: 'Zamówienia według miesięcy'
    },
    inventoryValue: {
      title: 'Wartość magazynu według kategorii'
    },
    inventoryShortages: {
      title: 'Braki w magazynie',
      noShortages: 'Brak niedoborów — wszystkie zamówienia mogą być zrealizowane!',
      noData: 'Brak danych magazynowych dla wybranych filtrów',
      orderId: 'ID zamówienia',
      sku: 'SKU',
      itemName: 'Nazwa produktu',
      quantityNeeded: 'Wymagana ilość',
      quantityAvailable: 'Dostępna ilość',
      shortage: 'Niedobór',
      daysDelayed: 'Dni opóźnienia',
      priority: 'Priorytet',
      unitsShort_one: 'brak 1 szt.',
      unitsShort_other: 'brak {n} szt.',
      days_one: '1 dzień',
      days_other: '{n} dni'
    },
    topProducts: {
      title: 'Najlepsze produkty wg przychodu',
      sku: 'SKU',
      product: 'Produkt',
      category: 'Kategoria',
      warehouse: 'Magazyn',
      stockStatus: 'Stan magazynu',
      revenue: 'Przychód',
      unitsOrdered: 'Zamówione szt.',
      firstOrder: 'Pierwsze zamówienie',
      inStock: 'W magazynie',
      lowStock: 'Niski stan'
    }
  },

  inventory: {
    title: 'Magazyn',
    description: 'Śledź i zarządzaj wszystkimi pozycjami magazynowymi',
    stockLevels: 'Poziomy zapasów',
    skus: 'SKU',
    searchPlaceholder: 'Szukaj według nazwy produktu...',
    clearSearch: 'Wyczyść wyszukiwanie',
    totalItems: 'Łączna liczba pozycji',
    totalValue: 'Łączna wartość',
    lowStockItems: 'Pozycje z niskim stanem',
    warehouses: 'Magazyny',
    table: {
      sku: 'SKU',
      itemName: 'Nazwa produktu',
      name: 'Nazwa',
      category: 'Kategoria',
      warehouse: 'Magazyn',
      quantity: 'Ilość',
      quantityOnHand: 'Ilość na stanie',
      reorderPoint: 'Punkt reorder',
      unitCost: 'Koszt jednostkowy',
      unitPrice: 'Cena jednostkowa',
      totalValue: 'Wartość łączna',
      location: 'Lokalizacja',
      status: 'Status'
    }
  },

  orders: {
    title: 'Zamówienia',
    description: 'Przeglądaj i zarządzaj zamówieniami klientów',
    allOrders: 'Wszystkie zamówienia',
    totalOrders: 'Łączna liczba zamówień',
    totalRevenue: 'Łączny przychód',
    avgOrderValue: 'Śr. wartość zamówienia',
    onTimeDelivery: 'Terminowość dostaw',
    itemsCount_one: '1 szt.',
    itemsCount_other: '{count} szt.',
    quantity: 'Ilość',
    table: {
      orderNumber: 'Numer zamówienia',
      orderId: 'ID zamówienia',
      orderDate: 'Data zamówienia',
      date: 'Data',
      customer: 'Klient',
      category: 'Kategoria',
      warehouse: 'Magazyn',
      items: 'Pozycje',
      value: 'Wartość',
      totalValue: 'Wartość łączna',
      status: 'Status',
      expectedDelivery: 'Planowana dostawa',
      actualDelivery: 'Rzeczywista dostawa'
    }
  },

  finance: {
    title: 'Panel finansowy',
    description: 'Śledź przychody, koszty i wyniki finansowe',
    totalRevenue: 'Łączny przychód',
    totalCosts: 'Łączne koszty',
    netProfit: 'Zysk netto',
    avgOrderValue: 'Śr. wartość zamówienia',
    fromOrders: 'Z {count} zamówień',
    costBreakdown: 'Zakupy + Operacyjne + Praca + Overhead',
    margin: 'marża',
    perOrderRevenue: 'Przychód na zamówienie',
    revenueVsCosts: {
      title: 'Miesięczny przychód vs koszty',
      revenue: 'Przychód',
      costs: 'Łączne koszty'
    },
    monthlyCostFlow: {
      title: 'Miesięczny przepływ kosztów',
      procurement: 'Zakupy',
      operational: 'Operacyjne',
      labor: 'Praca',
      overhead: 'Overhead'
    },
    categorySpending: {
      title: 'Wydatki według kategorii',
      ofTotal: 'z całości'
    },
    transactions: {
      title: 'Ostatnie transakcje',
      id: 'ID',
      description: 'Opis',
      vendor: 'Dostawca',
      date: 'Data',
      amount: 'Kwota'
    }
  },

  demand: {
    title: 'Prognoza popytu',
    description: 'Analizuj trendy i prognozy popytu',
    increasingDemand: 'Rosnący popyt',
    stableDemand: 'Stabilny popyt',
    decreasingDemand: 'Malejący popyt',
    itemsCount_one: '1 pozycja',
    itemsCount_other: '{count} pozycji',
    more: 'więcej...',
    demandForecasts: 'Prognozy popytu',
    table: {
      sku: 'SKU',
      itemName: 'Nazwa produktu',
      currentDemand: 'Aktualny popyt',
      forecastedDemand: 'Prognozowany popyt',
      change: 'Zmiana',
      trend: 'Trend',
      period: 'Okres'
    }
  },

  reports: {
    title: 'Raporty wyników',
    description: 'Przeglądaj kwartalne wskaźniki i miesięczne trendy',
    loading: 'Ładowanie raportów...',
    error: 'Błąd ładowania raportów',
    quarterly: {
      title: 'Wyniki kwartalne',
      quarter: 'Kwartał',
      totalOrders: 'Łączna liczba zamówień',
      totalRevenue: 'Łączny przychód',
      avgOrderValue: 'Śr. wartość zamówienia',
      fulfillmentRate: 'Wskaźnik realizacji'
    },
    monthlyTrend: {
      title: 'Miesięczny trend przychodów'
    },
    monthOverMonth: {
      title: 'Analiza miesiąc do miesiąca',
      month: 'Miesiąc',
      orders: 'Zamówienia',
      revenue: 'Przychód',
      change: 'Zmiana',
      growthRate: 'Stopa wzrostu'
    },
    stats: {
      totalRevenue: 'Łączny przychód (YTD)',
      avgMonthlyRevenue: 'Śr. miesięczny przychód',
      totalOrders: 'Łączna liczba zamówień (YTD)',
      bestQuarter: 'Najlepszy kwartał'
    }
  },

  backlog: {
    title: 'Zarządzanie zaległościami',
    description: 'Śledź i rozwiązuj niedobory w magazynie',
    loading: 'Ładowanie zaległości...',
    highPriority: 'Wysoki priorytet',
    mediumPriority: 'Średni priorytet',
    lowPriority: 'Niski priorytet',
    totalItems: 'Łączna liczba zaległości',
    cardTitle: 'Pozycje zaległe',
    noItems: 'Brak zaległości — wszystkie zamówienia mogą być zrealizowane!',
    unitsShort_one: 'brak 1 szt.',
    unitsShort_other: 'brak {n} szt.',
    days_one: '1 dzień',
    days_other: '{n} dni',
    table: {
      orderId: 'ID zamówienia',
      sku: 'SKU',
      itemName: 'Nazwa produktu',
      quantityNeeded: 'Wymagana ilość',
      quantityAvailable: 'Dostępna ilość',
      shortage: 'Niedobór',
      daysDelayed: 'Dni opóźnienia',
      priority: 'Priorytet'
    }
  },

  restocking: {
    title: 'Rekomendacje uzupełnienia zapasów',
    description: 'Generuj rekomendacje zakupów na podstawie stanów magazynowych, prognoz i budżetu',
    budgetLabel: 'Limit budżetu',
    budgetPlaceholder: 'Wprowadź budżet...',
    generate: 'Generuj rekomendacje',
    budgetSummary: {
      total: 'Całkowity budżet',
      used: 'Wykorzystany budżet',
      remaining: 'Pozostało'
    },
    table: {
      sku: 'SKU',
      name: 'Nazwa produktu',
      warehouse: 'Magazyn',
      category: 'Kategoria',
      currentStock: 'Aktualny stan',
      weeksOfStock: 'Tygodnie zapasów',
      suggestedQty: 'Sugerowana ilość',
      unitCost: 'Koszt jednostkowy',
      estimatedCost: 'Szacowany koszt',
      urgency: 'Pilność'
    },
    urgency: {
      critical: 'Krytyczne',
      warning: 'Ostrzeżenie'
    },
    empty: 'Uzupełnienie nie jest potrzebne — wszystkie pozycje mają wystarczające zapasy.',
    noMatch: 'Żadne pozycje nie mieszczą się w budżecie. Spróbuj zwiększyć limit.',
    loading: 'Generowanie rekomendacji...',
    error: 'Błąd ładowania rekomendacji'
  },

  filters: {
    timePeriod: 'Okres',
    location: 'Lokalizacja',
    category: 'Kategoria',
    orderStatus: 'Status zamówienia',
    all: 'Wszystkie',
    allMonths: 'Wszystkie miesiące'
  },

  status: {
    delivered: 'Dostarczone',
    shipped: 'Wysłane',
    processing: 'W realizacji',
    backordered: 'Zamówienie zaległe',
    inStock: 'W magazynie',
    lowStock: 'Niski stan',
    adequate: 'Wystarczające'
  },

  trends: {
    increasing: 'rosnący',
    stable: 'stabilny',
    decreasing: 'malejący'
  },

  priority: {
    high: 'Wysoki',
    medium: 'Średni',
    low: 'Niski'
  },

  categories: {
    circuitBoards: 'Płytki drukowane',
    sensors: 'Czujniki',
    actuators: 'Siłowniki',
    controllers: 'Kontrolery',
    powerSupplies: 'Zasilacze'
  },

  spendingCategories: {
    rawMaterials: 'Surowce',
    components: 'Komponenty',
    equipment: 'Sprzęt',
    consumables: 'Materiały eksploatacyjne'
  },

  warehouses: {
    sanFrancisco: 'San Francisco',
    london: 'Londyn',
    tokyo: 'Tokio'
  },

  months: {
    jan: 'Sty',
    feb: 'Lut',
    mar: 'Mar',
    apr: 'Kwi',
    may: 'Maj',
    jun: 'Cze',
    jul: 'Lip',
    aug: 'Sie',
    sep: 'Wrz',
    oct: 'Paź',
    nov: 'Lis',
    dec: 'Gru',
    january: 'Styczeń',
    february: 'Luty',
    march: 'Marzec',
    april: 'Kwiecień',
    june: 'Czerwiec',
    july: 'Lipiec',
    august: 'Sierpień',
    september: 'Wrzesień',
    october: 'Październik',
    november: 'Listopad',
    december: 'Grudzień'
  },

  profile: {
    profileDetails: 'Dane profilu',
    myTasks: 'Moje zadania',
    logout: 'Wyloguj'
  },

  profileDetails: {
    title: 'Dane profilu',
    email: 'E-mail',
    department: 'Dział',
    location: 'Lokalizacja',
    phone: 'Telefon',
    joinDate: 'Data dołączenia',
    employeeId: 'ID pracownika',
    close: 'Zamknij'
  },

  tasks: {
    title: 'Moje zadania',
    taskTitle: 'Tytuł zadania',
    taskTitlePlaceholder: 'Wprowadź tytuł zadania...',
    priority: 'Priorytet',
    dueDate: 'Termin',
    addTask: 'Dodaj zadanie',
    noTasks: 'Brak zadań. Dodaj pierwsze zadanie powyżej!'
  },

  language: {
    english: 'Angielski',
    japanese: 'Japoński',
    selectLanguage: 'Wybierz język'
  },

  common: {
    loading: 'Ładowanie...',
    error: 'Błąd',
    noData: 'Brak danych',
    viewDetails: 'Szczegóły',
    close: 'Zamknij',
    save: 'Zapisz',
    cancel: 'Anuluj',
    search: 'Szukaj',
    filter: 'Filtruj',
    export: 'Eksportuj',
    items: 'pozycji'
  }
}
