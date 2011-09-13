set :application, "chrome.io"
set :repository,  "git@github.com:wesbos/chromeio.git"
set :deploy_to,   "/chrome.io/"
set :scm,         :git
set :user,        :wesbos

set :use_sudo,    false

role :web, "192.168.10.10"                          # Your HTTP server, Apache/etc
role :app, "192.168.10.10"                          # This may be the same as your `Web` server

namespace :deploy do
  task :restart, :roles => :app, :except => { :no_release => true } do
    run "forever restart 0"
  end
end
