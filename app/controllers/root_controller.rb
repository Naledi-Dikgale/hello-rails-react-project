class RootController < ApplicationController
  def index
    @greetings = Greeting.all
  end
end
