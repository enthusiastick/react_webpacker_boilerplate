class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :handle, :last_name, :name

  def name
    "#{object.first_name} #{object.last_name} (#{object.handle})"
  end
end
