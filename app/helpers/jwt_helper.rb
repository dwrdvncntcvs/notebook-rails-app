module JwtHelper
  require 'jwt'

  SECRET_KEY = Rails.application.secret_key_base

  def jwt_encode(payload, exp = 7.days.from_now.to_i)
    payload[:exp] = exp
    JWT.encode(payload, SECRET_KEY)
  end

  def jwt_decode(token)
    decoded_data = JWT.decode(token, SECRET_KEY)[0]
    HashWithIndifferentAccess.new decoded_data
  rescue JWT::DecodeError => e
    error = {
      status: 'decode-error'
    }
  rescue JWT::ExpiredSignature => e
    error = {
      status: 'exp-signature'
    }
  end
end
