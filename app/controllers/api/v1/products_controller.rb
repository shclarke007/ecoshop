module Api
  module V1
    class ProductsController < ApplicationController
      protect_from_forgery with: :null_session

      def index
        products = Product.all
        render json: ProductSerializer.new(products).serialized_json
      end

      def create
        product = Product.create(product_params)

        if product.save
          render json: ProductSerializer.new(product).serialized_json
        else
          render json: { error: product.errors.messages }, status: 422
        end
      end

      def update
        product = Product.find(params[:id])

        if product.update(product_params)
          render json: ProductSerializer.new(product).serialized_json, status: :ok
        else
          render json: { error: product.errors.messages }, status: 422
        end
      end

      private

      def product_params
        params.permit(:category_name, :description, :shop_id)
      end
    end
  end
end
