# frozen_string_literal: true

module Api
  module V1
    class ShopsController < ApplicationController
      # protect_from_forgery with: :null_session
      skip_before_action :verify_authenticity_token

      # GET Shop
      def index
        shops

        render json: ShopSerializer.new(shops, options).serialized_json
        # render_ok(root: 'shop', serializer: ShopSerializer)
        # render json: serializer: ShopSerializer
      end

      def show
        shop
        render_ok
        # render json: ShopSerializer.new(shop, options).serialized_json, status: :ok
      end

      # POST Shop
      def create
        @shop = Shop.new(shop_params)
        # shop_params.inspect

        if shop.save
          render_ok
          # render json: ShopSerializer.new(@shop).serialized_json, status: :ok
        else
          render json: { error: shop.errors.messages }, status: 422
        end
      end

      # PATCH Shop
      def update
        shop = Shop.find(params[:id])

        if shop.update(shop_params)
          render_ok
          # render json: ShopSerializer.new(shop, options).serialized_json, status: :ok
        else
          # render json: { error: shop.errors.messages }, status: 422
          render_unprocessable
        end
      end

      # DESTROY Shop
      def destroy
        shop = Shop.find(params[:id])

        if shop.destroy
          head :no_content
        else
          render_unprocessable
          # render json: { error: shop.errors.messages }, status: 422
        end
      end

      private

      def shops
        @shops = Shop.all
      end

      def shop
        # byebug
        @shop ||= Shop.find(params[:id])
      end

      def render_unprocessable
        render json: { errors: shop.errors.messages }, status: :unprocessable_entity
      end

      def render_ok(options = {})
        render options.reverse_merge(json: shop, root: 'shop', status: :ok)
      end

      def shop_params
        params.require(:shop).permit(:id, :name, :address_1, :address_2, :city,
                      :town, :post_code, :image_url, :website)
      end

      def options
        @options ||= { include: %i[products] }
      end
    end
  end
end
