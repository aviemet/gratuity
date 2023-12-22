module RequestMacros
  def login_admin
    before do
      @admin = FactoryBot.create(:user)
      @admin.confirm
      @admin.add_role(:super_admin)
      sign_in @admin
    end
  end

  def login_user
    before do
      @user = FactoryBot.create(:user)
      @user.confirm
      sign_in @user
    end
  end
end
