module Api
  module V1
    class ShopsController < ApplicationController
      # protect_from_forgery with: :null_session
      skip_before_action :verify_authenticity_token

      # GET Shop
      def index
        shops = Shop.all

        render json: ShopSerializer.new(shops, options).serialized_json
      end

      def show
        shop = Shop.find(params[:id])

        render json: ShopSerializer.new(shop, options).serialized_json, status: :ok
      end

      # POST Shop
      def create
        shop = Shop.create(shop_params)
        shop_params.inspect
        if shop.save
          render json: ShopSerializer.new(shop).serialized_json, status: :ok
        else
          render json: { error: shop.errors.messages }, status: 422
        end
      end

      # PATCH Shop
      def update
        shop = Shop.find(params[:id])

        if shop.update(shop_params)
          render json: ShopSerializer.new(shop, options).serialized_json, status: :ok
        else
          render json: { error: shop.errors.messages }, status: 422
        end
      end

      # DESTROY Shop
      def destroy
        shop = Shop.find(params[:id])

        if shop.destroy
          head :no_content
        else
          render json: { error: shop.errors.messages }, status: 422
        end
      end

      private

      def shop_params
        params.permit(:id, :name, :address_1, :address_2, :city,
          :town, :post_code, :image_url, :website)
      end

      def options
        @options ||= { include: %i[products] }
      end
    end
  end
end
