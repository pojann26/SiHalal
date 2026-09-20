import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, Plus, MoreHorizontal } from 'lucide-react';
import { ingredientsData } from '../../data/mockData';
import { StatusBadge } from '../../components/common/Badge';

export function Ingredients({ onNavigate }) {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filtered = useMemo(() => {
    return ingredientsData.filter((item) => {
      const matchSearch = item.name.toLowerCase().includes(search.toLowerCase()) ||
                          item.category.toLowerCase().includes(search.toLowerCase());
      const matchStatus = statusFilter === 'all' || item.status === statusFilter;
      return matchSearch && matchStatus;
    });
  }, [search, statusFilter]);

  return (
    <div className="page">
      <section className="panel table-panel">
        <div className="panel-header wide">
          <div>
            <span className="eyebrow">STORE · MATRIKS BAHAN SJPH</span>
            <h2>Bahan Baku</h2>
            <p>Repositori bahan yang sudah dipindai dan divalidasi untuk usaha kamu.</p>
          </div>
          <button
            className="primary-btn flex items-center gap-1.5 whitespace-nowrap"
            onClick={() => onNavigate('validation')}
          >
            <Plus size={14} strokeWidth={3} /> Tambah
          </button>
        </div>

        {/* Toolbar */}
        <div className="table-toolbar">
          <div className="search-box">
            <Search size={14} />
            <input
              placeholder="Cari bahan atau merek..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button className="filter-button flex items-center gap-1">
            Semua status <ChevronDown size={12} />
          </button>
          <button className="filter-button flex items-center gap-1">
            Kategori <ChevronDown size={12} />
          </button>
        </div>

        {/* Data Table */}
        <div className="data-table">
          <div className="table-row table-head">
            <span>Nama bahan</span>
            <span>Kategori</span>
            <span>Status</span>
            <span>Sumber</span>
            <span>Terakhir diperbarui</span>
            <span></span>
          </div>

          {filtered.map((item) => (
            <div className="table-row" key={item.name}>
              <div className="name-cell">
                <div className="ingredient-thumb">{item.name.slice(0, 1)}</div>
                <strong>{item.name}</strong>
              </div>
              <span>{item.category}</span>
              <StatusBadge status={item.status} />
              <span className="muted">{item.source}</span>
              <span className="muted">{item.date}</span>
              <button className="row-more" aria-label="Aksi lainnya">
                <MoreHorizontal size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
