import React, { useState } from 'react';
import { FiPlus, FiEdit2, FiTrash2 } from 'react-icons/fi';
import AdminProductForm from '../components/admin/AdminProductForm';
import AdminCollectionForm from '../components/admin/AdminCollectionForm';
import AdminBannerForm from '../components/admin/AdminBannerForm';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState<'products' | 'collections' | 'banners'>('products');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);

  const handleAdd = () => {
    setEditingItem(null);
    setIsFormOpen(true);
  };

  const handleEdit = (item: any) => {
    setEditingItem(item);
    setIsFormOpen(true);
  };

  const handleDelete = (id: number) => {
    // Implement delete functionality
    console.log('Delete item:', id);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
    setEditingItem(null);
  };

  const handleFormSubmit = (data: any) => {
    
    console.log('Save data:', data);
    setIsFormOpen(false);
    setEditingItem(null);
  };

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-nofex font-bold">Admin Panel</h1>
          <button
            onClick={handleAdd}
            className="flex items-center space-x-2 bg-orange-500 text-rebel-light px-6 py-3 rounded-full hover:bg-orange-600 transition-colors font-nofex"
          >
            <FiPlus className="w-5 h-5" />
            <span>Add New</span>
          </button>
        </div>

        <div className="mb-8">
          <div className="border-b border-rebel-light/20">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab('products')}
                className={`py-4 px-1 font-nofex ${
                  activeTab === 'products'
                    ? 'border-b-2 border-orange-500 text-orange-500'
                    : 'text-rebel-light/70 hover:text-rebel-light'
                }`}
              >
                Products
              </button>
              <button
                onClick={() => setActiveTab('collections')}
                className={`py-4 px-1 font-nofex ${
                  activeTab === 'collections'
                    ? 'border-b-2 border-orange-500 text-orange-500'
                    : 'text-rebel-light/70 hover:text-rebel-light'
                }`}
              >
                Collections
              </button>
              <button
                onClick={() => setActiveTab('banners')}
                className={`py-4 px-1 font-nofex ${
                  activeTab === 'banners'
                    ? 'border-b-2 border-orange-500 text-orange-500'
                    : 'text-rebel-light/70 hover:text-rebel-light'
                }`}
              >
                Featured Banners
              </button>
            </nav>
          </div>
        </div>

        {isFormOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-rebel-dark border border-rebel-light/20 rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {activeTab === 'products' && (
                <AdminProductForm
                  product={editingItem}
                  onClose={handleFormClose}
                  onSubmit={handleFormSubmit}
                />
              )}
              {activeTab === 'collections' && (
                <AdminCollectionForm
                  collection={editingItem}
                  onClose={handleFormClose}
                  onSubmit={handleFormSubmit}
                />
              )}
              {activeTab === 'banners' && (
                <AdminBannerForm
                  banner={editingItem}
                  onClose={handleFormClose}
                  onSubmit={handleFormSubmit}
                />
              )}
            </div>
          </div>
        )}

        <div className="bg-rebel-dark/50 rounded-lg border border-rebel-light/20 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-rebel-light/20">
                  <th className="text-left p-4 font-nofex">Name</th>
                  <th className="text-left p-4 font-nofex">Category</th>
                  <th className="text-left p-4 font-nofex">Price</th>
                  <th className="text-right p-4 font-nofex">Actions</th>
                </tr>
              </thead>
              <tbody>
              
                <tr className="border-b border-rebel-light/20">
                  <td className="p-4">Black Rebel Hoodie</td>
                  <td className="p-4">Popular</td>
                  <td className="p-4">₹6,639</td>
                  <td className="p-4 text-right">
                    <button
                      onClick={() => handleEdit({ id: 1, name: 'Black Rebel Hoodie' })}
                      className="text-rebel-light/70 hover:text-orange-500 p-2"
                    >
                      <FiEdit2 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(1)}
                      className="text-rebel-light/70 hover:text-red-500 p-2"
                    >
                      <FiTrash2 className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;