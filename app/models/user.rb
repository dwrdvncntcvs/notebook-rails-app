class User < ApplicationRecord
    has_secure_password

    has_many :notebooks, dependent: :delete_all

    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: { case_sensitive: false }, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :password, presence: true

    def complete_name
        "#{first_name} #{last_name}"
    end

    def as_json(option = {})
        super(option.merge(except: :password_digest))
    end
end
