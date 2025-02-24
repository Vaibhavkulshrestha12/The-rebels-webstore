import React from 'react';
import { FiX } from 'react-icons/fi';

interface AdminProductFormProps {
  product?: any;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

const AdminProductForm = ({ product, onClose, onSubmit }: AdminProductFormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO:Implement form submission
    onSubmit({});
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-nofex font-bold">
          {product ? 'Edit Product' : 'Add New Product'}
        </h2>
        <button
          onClick={onClose}
          className="text-rebel-light/70 hover:text-rebel-light p-2"
        >
          <FiX className="w-6 h-6" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-nofex mb-2">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 bg-transparent border border-rebel-light/20 rounded-lg focus:outline-none focus:border-rebel-light transition-colors font-impact"
            defaultValue={product?.name}
          />
        </div>

        <div>
          <label className="block text-sm font-nofex mb-2">Category</label>
          <select className="w-full px-4 py-2 bg-transparent border border-rebel-light/20 rounded-lg focus:outline-none focus:border-rebel-light transition-colors font-impact">
            <option value="popular">Popular</option>
            <option value="anime">Anime</option>
            <option value="gaming">Gaming</option>
            <option value="souls">Souls</option>
            <option value="band">Band</option>
            <option value="movie">Movie</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-nofex mb-2">Price (INR)</label>
          <input
            type="number"
            className="w-full px-4 py-2 bg-transparent border border-rebel-light/20 rounded-lg focus:outline-none focus:border-rebel-light transition-colors font-impact"
            defaultValue={product?.price}
          />
        </div>

        <div>
          <label className="block text-sm font-nofex mb-2">Image URL</label>
          <input
            type="url"
            className="w-full px-4 py-2 bg-transparent border border-rebel-light/20 rounded-lg focus:outline-none focus:border-rebel-light transition-colors font-impact"
            defaultValue={product?.image}
          />
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 border border-rebel-light/20 rounded-full hover:bg-rebel-light/10 transition-colors font-nofex"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-orange-500 text-rebel-light rounded-full hover:bg-orange-600 transition-colors font-nofex"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminProductForm;