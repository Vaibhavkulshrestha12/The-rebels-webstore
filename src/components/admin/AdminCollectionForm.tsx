import React from 'react';
import { FiX } from 'react-icons/fi';

interface AdminCollectionFormProps {
  collection?: any;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

const AdminCollectionForm = ({ collection, onClose, onSubmit }: AdminCollectionFormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //TODO: Implement form submission
    onSubmit({});
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-nofex font-bold">
          {collection ? 'Edit Collection' : 'Add New Collection'}
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
          <label className="block text-sm font-nofex mb-2">Title</label>
          <input
            type="text"
            className="w-full px-4 py-2 bg-transparent border border-rebel-light/20 rounded-lg focus:outline-none focus:border-rebel-light transition-colors font-impact"
            defaultValue={collection?.title}
          />
        </div>

        <div>
          <label className="block text-sm font-nofex mb-2">Description</label>
          <textarea
            className="w-full px-4 py-2 bg-transparent border border-rebel-light/20 rounded-lg focus:outline-none focus:border-rebel-light transition-colors font-impact"
            rows={3}
            defaultValue={collection?.description}
          />
        </div>

        <div>
          <label className="block text-sm font-nofex mb-2">Category ID</label>
          <input
            type="text"
            className="w-full px-4 py-2 bg-transparent border border-rebel-light/20 rounded-lg focus:outline-none focus:border-rebel-light transition-colors font-impact"
            defaultValue={collection?.category}
          />
        </div>

        <div>
          <label className="block text-sm font-nofex mb-2">Image URL</label>
          <input
            type="url"
            className="w-full px-4 py-2 bg-transparent border border-rebel-light/20 rounded-lg focus:outline-none focus:border-rebel-light transition-colors font-impact"
            defaultValue={collection?.image}
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

export default AdminCollectionForm;