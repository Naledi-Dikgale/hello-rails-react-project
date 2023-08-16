class Api::V1::GreetingsController < ApplicationController
  def index
    @greetings = Greeting.all

    @greetings = @greetings.map(&:greeting)

    @greetings = @greetings.sample

    sleep 1

    render json: { greeting: @greetings }
  end
end
