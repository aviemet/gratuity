require 'rails_helper'
require "models/concerns/serializable"

RSpec.describe Person do
  subject(:person) { create(:person) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(build(:person)).to be_valid
    end

    it "is invalid with invalid attributes" do
      expect(build(:person, {
        first_name: nil
      },)).not_to be_valid

      expect(build(:person, {
        last_name: nil
      },)).not_to be_valid
    end
  end

  describe "Associations" do
    it { is_expected.to belong_to(:user).optional }
    it { is_expected.to have_many(:groups) }
  end

  describe "Serializer" do
    it_behaves_like "serializable"
  end
end
