﻿using System.ComponentModel.DataAnnotations;

namespace ShopAPI.Dtos.Requests;

public class UserLoginRequest
{
    [Required]
    public string Email { get; set; }
    [Required]
    public string Password { get; set; }
}