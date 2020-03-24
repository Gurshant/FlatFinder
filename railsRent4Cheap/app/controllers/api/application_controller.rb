class Api::ApplicationController < ApplicationController
  # When makeing POST, DELETE, AND PATCH requests to our controllers, Rails requires that an authenticity token is included as part of our params. Noramlly Rails will add this to any form that generates form helper methods i.e. form_with, form_for, form_tag. This prevents third parties from making such requests to our Rails app. It's a security measure that is unneccessary in the context of a Web API.
  skip_before_action :verify_authenticity_token
 
  private
  def authenticate_user!
    p user_signed_in?
    unless user_signed_in?
      render(json: { status: 401 }, status: 401 )
    end
  end
end
 