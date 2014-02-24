class MembersController < ApplicationController
	
	def index #this shows initial root page
		render :layout => 'layout_check'
	end

	def show #this section shows patient layout
		render :layout => 'member_layout'
	end

	def edit #this section shows provider layout 
		render :layout => 'provider_layout'
	end

end
