using QuickBuy.Dominio.Entity;
using QuickBuy.Repositorio.Repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Repositorio
{
	public class Client
	{
		public Client()
		{
			var userRepository = new UserRepository();
			var product = new Product();
			var user = new User();

			userRepository.Add(user);
		}
	}
}
