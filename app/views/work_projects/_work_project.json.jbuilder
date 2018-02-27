json.extract! work_project, :id, :title, :description, :imgLink, :info_link, :category, :technology, :created_at, :updated_at
json.url work_project_url(work_project, format: :json)
