module ResponseHelper
  def success_res(data, message = 'success')
    {
      data:,
      message:,
      timestamp: Time.now.to_i
    }
  end
end
